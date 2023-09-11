---
sidebar_position: 13
---

# Joint attachment

Joint attachment component is used to attach an entity to a joint of a parent skeleton.

![Joint attachment](./img/joint-attachment.png)

## Attaching entity to a joint

To attach an entity to a joint, the entity with the joint attachment component **must be** immediate child of an entity that has a skeleton. If entity is not an immediate child of an entity with skeleton, joint attachment component will display the following message:

![Joint attachment not child of a skeleton](./img/joint-attachment-not-child-of-skeleton.png)

You can drag the entity as a child of skeleton by dragging it in the scene panel:

![Scene panel drag to skeleton](./img/joint-attachment-drag-entity-to-skeleton.png)

Once entity is dragged, the joint attachment will show a button to open the choose a joint:

![Joint attachment select joint](./img/joint-attachment-select-joint.png)

When a joint is selected, the transform of the entity will always be relative to the world coordinate of a joint. This process is automatic. Once you select the joint, now you can change the transforms to fit your needs.

## Demo

import jointAttachmentDemo from './img/joint-attachment-demo.mp4';

<video src={jointAttachmentDemo} controls title="Title" width="600"></video>
