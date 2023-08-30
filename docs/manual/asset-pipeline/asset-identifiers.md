---
sidebar_position: 3
---

# Asset identifiers

All assets in the engine are referenced by UUIDs. This includes assets stored in scene files, in script variables, and animators. When an asset is imported, the editor automatically creates a corresponding `meta` that includes the UUIDs associated with the asset.

Using UUIDs makes it significantly easier to rename or move your assets in your project without breaking all the references.

## Renaming or moving assets from filesystem

Currently, assets can only be renamed or moved directly from the filesystem.

### Renaming

When renaming the asset, make sure to rename the meta file to have the new asset name included.

Example: Suppose you have an asset named `Knight.glb` and a meta file named `Knight.glb.meta`. If you want to rename the asset to `Mage.glb`, make sure to also rename the meta file to `Mage.glb.meta`.

### Moving

When moving the asset, make sure to move the meta file to the new directory as well.

Example: Suppose you have an asset named `Knight.glb` and a meta file named `Knight.glb.meta`. If you want to move the asset to `characters/` directory make sure to move the meta file to `characters/` directory as well.
