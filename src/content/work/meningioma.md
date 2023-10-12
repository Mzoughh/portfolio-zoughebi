---
title: Implementation of a 3D-UNET network for brain tumor segmentation
publishDate: 2023-9-13 00:00:00
img: /assets/Meningiome/meningioma.png
img_alt: Meningioma.
description: |
  In collaboration with Laval University, I worked on an internship project at the Quebec research laboratory .
tags:
  - Artificial Intelligence
  - Segmentation
  - Research exeperience
---


Detection and localization of tumors within the human body are crucial challenges in oncology research. In order to assist surgeons in better planning surgical procedures, a study is being conducted on the correlation between transverse relaxation times and the stiffness of meningiomas. The objective of the proposed implementation is to automate the segmentation phase of meningiomas, which is currently time-consuming and labor-intensive, using an artificial intelligence model.


The resources for this project are gathered into a database of MRI scans from 37 patients with meningiomas (brain tumors). The initial phase of the work involves implementing automated data normalization steps to assess their potential contribution to the project. Due to the heterogeneity of these data and their limited quantity, we are constrained to use a database provided by the University of Pennsylvania for the BraTS2020 challenge for training the model. This database contains 505 MRI patient records with brain-localized tumors, including 3D images with contrast-enhanced T1-weighted, T2-weighted, and FLAIR sequences. Access to Quebec's supercomputers is required to study the influence of hyperparameters on the model in a reasonable timeframe.

In conclusion, this study has enabled the automation of meningioma segmentation. In the future, this segmentation could facilitate the automated reconstruction of a 3D model of meningiomas.


The entire code developed is available on my Github repository. Additionally, you can also find the scientific poster created during the internship bellow.

<a href="/assets/Meningiome/Poster.pdf" download>Download the poster</a>

