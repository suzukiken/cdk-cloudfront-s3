#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkcloudfrontS3Stack } from '../lib/cdkcloudfront-s3-stack';

const app = new cdk.App();
new CdkcloudfrontS3Stack(app, 'CdkcloudfrontS3Stack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
