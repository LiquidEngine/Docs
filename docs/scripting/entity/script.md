---
sidebar_position: 1050
---

# Script

Script API allows accessing script of an entity.

## Methods

### `get(name: string)` {#method-get}

Get **global** script variable from other entity.

```lua
local other = entityQuery:getFirstEntityByName('someEntity')
local var = other.script:get('someVariable')
```

If entity has a script but script is not loaded, this method will wait for
the script to be ready before retrieving the value.

:::danger Avoid circular dependencies

A circular dependency can happen if script A sets/gets variable from script B
and script B sets/gets variable from script A.

Circular dependencies can cause undefined behavior and
might even cause a stall in the script; so, avoid it at all costs.

:::

:::danger Do not call a function from other scripts

The scripting system allows retrieving any global variable from other scripts;
however, calling from stored in another script has undefined behavior.

:::

**Parameters:**

- `name`: Name of a global variable in another script

**Returns:**

- Type of variable in the script if variable exists in the script
- `nil` if script does not exist or variable does not exist in the script

### `set(name: string, value: any): void` {#method-set}

Set **global** variable of another entity.

```lua
local other = entityQuery:getFirstEntityByName('someEntity')
local var = other.script:set('someVariable', 15)
```

If entity has a script but script is not loaded, this method will wait for
the script to be ready before setting the value.

You can modify the script variable's to any value, even modifying the type.

If a script does not exist or if it does not have the global variable, this method
will be **noop**.

:::danger Avoid circular dependencies

A circular dependency can happen if script A sets/gets variable of script B
and script B sets/gets variable of script A.

Circular dependencies can cause undefined behavior and
might even cause a stall in the script; so, avoid it at all costs.

:::

**Parameters:**

- `name`: Name of a global variable in another script
- `value`: New value to assign to the global variable
