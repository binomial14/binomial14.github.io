---
title: 'Dimension Reduction'
date: 2020-12-3
permalink: /posts/2012/08/blog-post-1/
tags:
  - data science
---

一個 dataset 會有很大量的 feature，dimension reduction 是為了減少 feature 的數量、讓問題更容易解決，因為有些 feature 是沒什麼用的，可能會使結果更差，而且較少的 feature 有利於計算。

有三種方式：

1. Feature selection: 從原本的 feature 中選出一部分
2. Feature projection: 對原本的 feature 做 linear combination
3. Manifold modeling: 對原本的 feature 做 non-linear combination
4. Model regularization:
    1. L2 reduces effective dimensionality
    2. L1 reduces actual dimensionality

Curse of dimensionality: 處理高維數據的棘手情況

# PCA (Principal Component Analysis)

PCA 是一種 feature projection 的方法，當一個 dataset 有很多組 attributes，希望挑出來的是擁有大variance 、小 covariance (correlation)，我個人的理解是那些跟其他 attribute 有顯著差異的 attributes。

## Covariance matrix:

$$S_x = \frac{1}{n-1}XX^T$$

- The element Eii is the variance of attribute i.
- The element Eij is the covariance of attribute i and attribute j.

transform to:

$$S_x = \begin{bmatrix}d_1 & 0 & \ddots & 0 \\ 0 & d_2 & \ddots & 0 \\ \ddots & \ddots & \ddots & \ddots \\0 & 0 & \ddots & d_m \end{bmatrix}$$

假設有 m 個 attributes，找出一條有最小 square distance 的回歸線（這條線的 variance 會最大），然後在 orthogonal 的方向找出 m 條這樣的線，這些線就是 principal components，接下來就可以選出 variance 最大的幾條線來做降維投影。