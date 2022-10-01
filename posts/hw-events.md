---
title: "Horizon Worlds Event Handling"
tagline: " - Sending, Receiving & Canceling Events"
description:
author: Tim Jeske
featuredImage: "horizonworlds.webp"
images:
  - images/blog/damnedcat.jpeg
video: https://www.youtube.com/watch?v=iWr3zy6Evv0
date: "2022-09-23"
tags:
  - "horizon worlds"
  - "tutorial"
---

## Overview

Events are groups of code blocks that are execute when a send event is received.

## When Event Is Received

This event will be executed when its counterpart **[send event to object]** or **[send event with delay]** event is executed.

### Location

- Events > Events > **[when event is received]**

### Syntax

### Breakdown

- _{myEvent}_: The name of the event you are creating.
- _(New Parameter)_: The variable to be received from the send event.

### Usage

1. Grab and drag the **[when event is received]** code block from the Events section of the Events tab to the location on the script you wish to receive the event.
2. Change the events name from _{myEvent}_ to a new name by clicking on the down arrow to the right of _{myEvent}_ in the code block and selecting New Event from the drop down menu. Type in the name you want and click enter.
3. If a parameter needs to be passed to this event click in (New Parameter). A new window will pop up which will allow you to type in a name, select a variable type and select if it will be a list or not.
   1. Repeat this for as many parameters as needed up to a max of 3.
4. Add the desired functionality with this even code grouping.

### Example(s)

#### Errors > Cause > Fix

1. No errors will print to the console. Even if the parameters that are being sent are of the wrong variable type. The event will just not be executed.

### Notes

1. You can add more than 3 _(New Parameters)_. However, you can only send up to 3.
   1. You can get around this limitation by setting the _(New Parameter)_ as a list.

## Send Event To Object

This event will execute its counterpart [when event is received] event.

### Location

- Events > Event Actions > **[send event to object]**

### Syntax

### Breakdown

- _{myEvent}_: The name of the event you wish to be executed.
- _(target)_: The object variable of the object that the script with _{myEvent}_ is on.
- _(New Parameter)_: The variable to be passed along to the receiving event and is a counterpart to a parameter set on the when event is received code block. This parameter must match its counterpart in both type and order.

### Usage

1. Grab and drag the [send event to object] code block from the Event Actions section of the Events tab to the location on the script you wish to send an event.
2. Change _[myEvent]_ to the event you wish to execute by clicking on the down arrow to the right of _{myEvent}_ in the code block and selecting the events name.
3. Change _(target)_ to the object variable of the object with the script.
   1. If the event sits on the same script as the send event leave as _(self)_.
   2. If the event sits on a different script you must create an object variable for the object that has the script.
      1. Grab and drag the objects variable and drop in onto _(self)_ to replace it with the new object variable.
4. Add new parameters that correspond with any parameters that are required for the receiving event.
   1. If none are required leave this blank.

### Example(s)

#### Errors > Cause > Fix

1. “Expression cannot be empty”
1. If the object variable is left empty.
1. Drop an object variable pill into the target slot.

### Notes

1. Events must be created first.
2. New parameters must match its counterpart in both type and order.
3. No errors will print to the console if all parameters are filled. However, if any of the parameter types are wrong when executed the receiving event will not run.

## Send Event With Delay

This event will execute its counterpart **[when event is received]** event after its delay period.

### Location

- Events > Event Actions > **[send event with delay]**
  Syntax

### Breakdown

- _{myEvent}_: The name of the event you wish to be executed.
- _(target)_: The object variable of the object that the script with _{myEvent}_ is on.
- _(delay)_: The amount of time in seconds that will elapse before the send event is executed.
- _(New Parameter)_: The variable to be passed along to the receiving event and is a counterpart to a parameter set on the when event is received code block. This parameter must match its counterpart in both type and order.

### Usage

1. Grab and drag the [send event to object] code block from the Event Actions section of the Events tab to the location on the script you wish to send an event.
2. Change _{myEvent}_ to the event you wish to execute by clicking on the down arrow to the right of {myEvent} in the code block and selecting the events name.
3. Change _(target)_ to the object variable of the object with the script.
   1. If the event sits on the same script as the send event leave as _(self)_.
   2. If the event sits on a different script you must create an object variable for the object that has the script.
      1. Grab and drag the objects variable and drop in onto _(self)_ to replace it with the new object variable.
4. Change _(delay)_ to the amount of time you wish to elapse before the send event is executed.
5. Add new parameters that correspond with any parameters that are required for the receiving event.
   1. If none are required leave this blank.

### Example(s)

#### Errors > Cause > Fix

1. “Expression cannot be empty”
   1. If the object variable or delay variable is left empty.
      1. Drop an object variable into the target slot.
      2. Drop a number variable into the delay slot.
2. “Start timer second parameter must be a number”
   1. If the variable in the delay slot is not a number variable
      1. Drop a number variable into the delay slot.
3. “Placeholder fragment is missing a label property (#)”
   1. A variable was deleted from the new Parameter slot.
      1. Undo or delete the send event with delay code block and drag in a new one.

### Notes

1. No errors will print to the console if all parameters are filled. However, if any of the parameter types are wrong when executed the receiving event will not run.
2. Error 3 might be a bug as this does not happen when deleting a variable on the send event to object code block.
3. New parameters must match its counterpart in both type and order

## Cancel Sending With Delay

This event will cancel its counterpart **[send event to object]** or **[send event with delay]**. Preventing the **[when event is received]** event from being executed.

### Location

- Events > Event Actions > **[cancel sending with delay]**

### Syntax

### Breakdown

- _{myEvent}_: The name of the event you wish to cancel.
- _(target)_: The object variable of the object that the script with _{myEvent}_ is on.

### Usage

1. Grab and drag the **[cancel sending with delay]** code block from the Event Actions section of the Events tab to the location on the script you wish to cancel sending the event.
2. Change _{myEvent}_ to the event you wish to execute by clicking on the down arrow to the right of _{myEvent}_ in the code block and selecting the events name.
3. Change _(target)_ to the object variable of the object with the script.
   1. If the event sits on the same script as the send event leave as _(self)_.
   2. If the event sits on a different script you must create an object variable for the object that has the script.
   3. Grab and drag the objects variable and drop in onto _(self)_ to replace it with the new object variable.

### Example(s)

#### Errors > Cause > Fix

1. “Expression cannot be empty”
   1. If the object variable is left empty.
      1. Drop an object variable pill into the target slot.
2. “Stop timer Expression must be an object id”
   1. If a variable that is not of type object is dropped in the object variable slot.
      1. Drop an object variable pill into the target slot.

### Notes

1. Must come after the send event is executed but before the receive event is executed.
