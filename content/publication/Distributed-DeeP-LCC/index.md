---
title: 'Distributed data-driven predictive control for cooperatively smoothing mixed traffic flow'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Jiawei Wang
  - Yingzhao Lian
  - Yuning Jiang
  - Qing Xu
  - Keqiang Li
  - Colin N. Jones

# Author notes (optional)
author_notes: []
  #- 'Equal contribution'
  #- 'Equal contribution'

date: '2023-07-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2023-10-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article-journal']

# Publication name and optional abbreviated publication name.
publication: "Transportation Research Part C: Emerging Technologies"
publication_short: ""

abstract: This paper proposes a cooperative DeeP-LCC (Data-EnablEd Predictive Leading Cruise Control) formulation and its distributed implementation algorithm. In cooperative DeeP-LCC, the traffic system is naturally partitioned into multiple subsystems with one single CAV, which collects local trajectory data for subsystem behavior predictions based on the Willems’ fundamental lemma. Meanwhile, the cross-subsystem interaction is formulated as a coupling constraint. Then, we employ the Alternating Direction Method of Multipliers (ADMM) to design the distributed DeeP-LCC algorithm. This algorithm achieves both computation and communication efficiency, as well as trajectory data privacy, through parallel calculation. Our simulations on different traffic scales verify the real-time wave-dampening potential of distributed DeeP-LCC, which can reduce fuel consumption by over 31.84% in a large-scale traffic system of 100 vehicles with only 5%–20% CAVs.

# Summary. An optional shortened abstract.
summary: []

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/PREDICT-EPFL/Distributed-DeeP-LCC'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  placement: 1
  caption: 'Distributed DeeP-LCC'
  focal_point: 'Center'
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: ""
  #- example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---


