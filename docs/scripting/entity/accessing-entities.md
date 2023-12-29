---
sidebar_position: 100
---

# Accessing entities

There are three ways to access entities from scripts.

## Accessing script's entity

All scripts are attached to entities. You can access the entity that the script belongs to using the globalla accessible `entity` object:

```lua
local name = entity.name:get()
```

## Querying entities

You can also query entities using the [entity query service](../services/entity-query.md):

```lua
local entity_query = game:get('EntityQuery')
local found_entity = entity_query:get_first_entity_by_name("Test")
```

## Spawning entities

You can also spawn entities using the [entity spawner service](../services/entity-spawner.md):

```lua
local entity_spawner = game:get('EntitySpawner')
local my_entity = entity_spawner:spawn_empty()
```
