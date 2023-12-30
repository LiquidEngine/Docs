---
sidebar_position: 100
---

# Accessing entities

There are three ways to access entities from scripts.

## Accessing script's entity

All scripts are attached to entities. You can access the entity that the script belongs to using the globally accessible `entity` object:

```lua
local name = entity.name.value
```

## Querying entities

You can also query entities using the [entity query service](../services/entity-query.md):

```lua
local entityQuery = game:get('EntityQuery')
local foundEntity = entityQuery:getFirstEntityByName("Test")
```

## Spawning entities

You can also spawn entities using the [entity spawner service](../services/entity-spawner.md):

```lua
local entitySpawner = game:get('EntitySpawner')
local myEntity = entitySpawner:spawnEntity()
```
