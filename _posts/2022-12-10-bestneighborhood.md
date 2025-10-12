---
layout: post
title: "Best Neighborhood"
description: "Finding the best neighborhood for kids in Pittsburgh using Python data analysis"
image: pittsburgh.png
---

## Project Brief
**Goal:** Identify the “best” Pittsburgh neighborhood for kids using public amenity data.  
**Why:** Support family-friendly planning and highlight community assets.  
**Scope:** Compare neighborhoods by access to three kid-centric amenities: pools, courts/rinks, playgrounds.  
**Data:** WPRDC open datasets and city neighborhood boundaries.  
**Method:** Count amenities; score pools by total capacity with a 15–1 points scheme; sum into one final score.  
**Outcome:** **Squirrel Hill South** ranks first. Runners-up include **Brookline** and **Highland Park**.

 
## **Big Ideas in Computing and Information FINAL PROJECT**

### Overview
We define the “best” Pittsburgh neighborhood by kid-centered **funness**. Using WPRDC datasets, we compare three public amenities:
- pools
- courts/rinks
- playgrounds

### Metric
- **Courts/rinks** and **playgrounds**: rank by raw **counts** per neighborhood.
- **Pools**: rank by **total capacity** per neighborhood. Convert the top 15 to points: 15 for 1st, 14 for 2nd, …, 1 for 15th.
- **Final score**: pools points + playground count + courts/rinks count.

---

## Data
Following data was opensourced from Western Pennsylvania Regional Data Center
- Basketball/Tennis Court & Rinks data set
- Pools data set
- Playgrounds data set
- Neighborhoods shapefile: `Neighborhoods/Neighborhoods_.shp`

**Base map preview:**

![](/assets/img/best-neighbor/52488d7b955bc2ad490ce946c32d70ee3a282d82.png)

---

## Python Libraries Used
`pandas`, `geopandas`, `matplotlib`, `shapely`

## Results

### Courts and Rinks
**We tally facilities per neighborhood and rank.**

![](/assets/img/best-neighbor/58ee999259a6661bea5cc1bb193e8abc0ee07420.png)

**Facility locations over the neighborhood map:**

![](/assets/img/best-neighbor/3cf30ce46fb1e8f180420656c672200dda90d47f.png)

**Top 5 (courts/rinks):**
1. Squirrel Hill South (26)  
2. Highland Park (20)  
3. Hazelwood (10)  
4. Beltzhoover (9)  
5. Brookline (9)

---

### Pools
We count pools, then emphasize **capacity** to reflect usable water area.

**Counts:**

![](/assets/img/best-neighbor/477ab8fd7ff6fa6c3eca815e2ffc262680fae82b.png)

**Capacity (Liters):**

![](/assets/img/best-neighbor/29a188ab0c51f92a9419fbd4c12f040334c68692.png)

**Capacity → points (In order to give these large numbers a more useful value, I gave each of the top 15 a score that we can use to choose the final funnest neighborhood.The 1st place got a score of 15, 2nd got 14, 3rd got 13, and so on until the 15th place.)**

![](/assets/img/best-neighbor/e6cb4c37a658a670e509a8ead4aac1a54ca2ee10.png)

**Pool locations:**

![](/assets/img/best-neighbor/5138ab067a3bcc01b5822581ee001fa236780b37.png)

**Top 5 (capacity):**
1. Bedford Dwellings (538,000 L)  
2. Brookline (417,657 L)  
3. Mount Washington (356,000 L)  
4. Bloomfield (335,000 L)  
5. South Side Flats (312,800 L)

---

### Playgrounds
**Counts per neighborhood and map.**

![](/assets/img/best-neighbor/5c3b9ebc8b7ce65355d05afec08f918cb72f96da.png)

![](/assets/img/best-neighbor/3ce628e5843c7e7ea6bfe13c52079614f6fd90e6.png)

**Top 5 (playgrounds):**
1. Squirrel Hill South (8)  
2. Beechview (5)  
3. South Side Slopes (5)  
4. Highland Park (4)  
5. Sheraden (4)

---

## Combined Score
We union neighborhoods across datasets, then compute:
`final_score = pool_points + playground_count + courts_rinks_count`

**Stacked comparison for the top 15:**

![](/assets/img/best-neighbor/224502b146d24fb37f21583be5749f7828bf810a.png)

**All facilities on one map**
Key: courts/rinks = purple, pools = blue, playgrounds = salmon.

![](/assets/img/best-neighbor/4d4f32bfa58a5cddc6cd7653dc45e52f99e46fe2.png)

---

## Winner
**Squirrel Hill South** — 8 playgrounds, 26 courts/rinks, and a moderate pool presence.  
Runners-up: **Brookline**, **Highland Park**, **Allegheny Center**, **Mount Washington**.

