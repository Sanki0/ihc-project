#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsStack } from '../lib/aws-stack';

const cdk_env: any = {};
Object.keys(process.env)
  // .filter((k) => k.startsWith("CDK_PARAM"))
  .map((k) => (cdk_env[k] = process.env[k]));

const app = new cdk.App();
new AwsStack(app, 'AwsStack', {
  env: {
    account: cdk_env.CDK_DEPLOY_ACCOUNT,
    region: cdk_env.CDK_DEPLOY_REGION,
    ...cdk_env,
  },
});