---
title: Things
date: 2021-07-08 18:07:00 -05:00
permalink: "/things/"
position: 2
photos:
- "/uploads/2018-10-63663.jpg"
- "/uploads/2018-09-63334.jpg"
- "/uploads/2018-09-61909.jpg"
- "/uploads/2017-08-54529.jpg"
- "/uploads/2017-05-53253.jpg"
- "/uploads/2013-08-15638.jpg"
- "/uploads/2018-09-63197.jpg"
---

{% if page.photos %}
  {% include photos.html photos=page.photos %}
{% endif %}
