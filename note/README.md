+++
title = "カスタムドメインでCloudFront経由でS3バケットを配信する"
date = "2021-05-02"
tags = ["CloudFront", "S3"]
+++

比較的よく使いそうな組み合わせである

* S3バケット
* それを配信するCloudFront
* Route53のレコードでドメイン名を指定

をしてくれるCDKを作った。

[Githubのリポジトリ](https://github.com/suzukiken/cdkcloudfront-s3)

