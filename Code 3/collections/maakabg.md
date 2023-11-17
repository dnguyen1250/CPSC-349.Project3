<!-- ---
layout: base.html
title: Lonely Collection
permalink: /collections/maakabg/
---

<header>
  <h1>{{ title }}</h1>
</header>

<main>
  <p>{{ collection.description }}</p>

  <h2>Photos in this Collection</h2>
  <ul>
    {% for photo in collection.photos %}
      <li>
        <img src="{{ photo.src.tiny }}" alt="{{ photo.alt }}">
        <p>Photographer: <a href="{{ photo.photographer_url }}" target="_blank">{{ photo.photographer }}</a></p>
        <p>{{ photo.alt }}</p>
      </li>
    {% endfor %}
  </ul>
</main>

<footer>
  <hr />
  <p>
    <small>
      <a href="https://www.pexels.com" target="_blank">Photos provided by Pexels</a>
    </small>
  </p>
</footer> -->
