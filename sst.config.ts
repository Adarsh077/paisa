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
    const PORT = new sst.Secret("PORT");
    const MONGODB_URI = new sst.Secret("MONGODB_URI");
    const JWT_SECRET = new sst.Secret("JWT_SECRET");

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
      environment: {
        PORT: PORT.value,
        MONGODB_URI: MONGODB_URI.value,
        JWT_SECRET: JWT_SECRET.value,
      },
    });

    const api = new sst.aws.ApiGatewayV2("PaisaApi", { vpc });
    api.routePrivate("$default", service.nodes.cloudmapService.arn);
  },
});
