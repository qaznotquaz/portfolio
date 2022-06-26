---
layout: article
title: Modules
color-scheme: paper
category: Modules
index: 2
last-edited: 6/26/2022
---


Features were grafted onto Sinoper V.1 as implementations of a `Module` interface.

{% include heading-with-link.md text='ModuleWithElements' %}
Most modules have some amount of data they're meant to handle and keep track of. This class streamlines that by providing a HashSet to store that data in. Implementations are expected to define how to load their data from the filesystem, and to save it, but ModuleWithElements provides the basic methods for interacting with the data once it's loaded.

{% include under-construction.html %}
