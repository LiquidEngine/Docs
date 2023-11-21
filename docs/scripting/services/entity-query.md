---
sidebar_position: 1
---

# Entity query

```lua
local entity_query = game:get('EntityQuery')
```

Entity query service provides methods to query entities in the scene:

## Reference

### `get_first_entity_by_name(name: string): Entity` {#get_first_entity_by_name}

Queries entities by name and retrieves the first found result:

```lua
local entity_query = game:get('EntityQuery')
local found = entity_query:get_first_entity_by_name("Test")
```
