/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "paisa-api",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("PaisaVpc", {
      az: ["ap-south-1a", "ap-south-1b", "ap-south-1c"],
    });
    const cluster = new sst.aws.Cluster("PaisaCluster", { vpc });

    const service = new sst.aws.Service("PaisaService", {
      cluster,
      dev: false,
      serviceRegistry: {
        port: 8001,
      },
    });

    const api = new sst.aws.ApiGatewayV2("PaisaApi", { vpc });
    api.routePrivate("$default", service.nodes.cloudmapService.arn);
  },
});
