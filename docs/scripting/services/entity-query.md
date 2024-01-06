---
sidebar_position: 100
---

# Entity query

```lua
local entityQuery = game:get('EntityQuery')
```

Entity query service provides methods to query entities in the scene:

## Methods

### `getFirstEntityByName(name: string): Entity` {#method-getFirstEntityByName}

Queries entities by name and retrieves the first found result:

```lua
local entityQuery = game:get('EntityQuery')
local found = entityQuery:getFirstEntityByName("Test")
```
