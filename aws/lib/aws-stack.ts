import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class AwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const cdk_env: any = { ...props?.env };

    console.log("env", cdk_env);

    // the bucket is public by default
    const bucket = new cdk.aws_s3.Bucket(this, `bucket-${cdk_env["CDK_PARAM_STACK"]}-${cdk_env["CDK_PARAM_PROJECT"]}-${cdk_env["CDK_PARAM_ENVIRONMENT"]}`, {
      bucketName: `bucket-${cdk_env["CDK_PARAM_STACK"]}-${cdk_env["CDK_PARAM_PROJECT"]}-${cdk_env["CDK_PARAM_ENVIRONMENT"]}`,
      cors: [
        {
          allowedMethods: [
            cdk.aws_s3.HttpMethods.GET,
            cdk.aws_s3.HttpMethods.PUT,
            cdk.aws_s3.HttpMethods.POST,
            cdk.aws_s3.HttpMethods.DELETE,
          ],
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
        },
      ],
      removalPolicy: cdk.RemovalPolicy.DESTROY,


    });


  }
}
