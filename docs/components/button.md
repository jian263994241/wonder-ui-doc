---
title: Button 按钮
---

# Button 按钮

只需通过轻按一下按钮，用户即可采取行动并做出选择。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在Wonder UI中提供三种按钮: 

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 次要按钮：用于次于主动点，区别于主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 链接(文字)按钮：用于次要或外链的行动点。

## 代码演示

```jsx
/** 
 * title: 实心按钮
 * desc: 表示高度的强调, 根据他们的立体效果和填充颜色来区分彼此。 它们用于触发应用程序所具有的主要功能。
 */
import React from 'react';
import { Button } from '@wonder-ui/core';
import { createUseStyles } from '@wonder-ui/styles';

const useStyles = createUseStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  )
}
```

```jsx
/** 
 * title: 文本按钮
 * desc: 通常用于不太明显的操作
 */
import React from 'react';
import { Button } from '@wonder-ui/core';
import { createUseStyles } from '@wonder-ui/styles';

const useStyles = createUseStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="text">Default</Button>
      <Button variant="text" color="primary">Primary</Button>
      <Button variant="text" color="secondary">Secondary</Button>
      <Button variant="text" disabled>Disabled</Button>
      <Button variant="text" href="#text-buttons">Link</Button>
    </div>
  )
}
```

```jsx
/** 
 * title: 描边按钮
 * desc: 是中等强调按钮。 它们包含重要的操作， 但不是应用程序中的主要操作。
 */
import React from 'react';
import { Button } from '@wonder-ui/core';
import { createUseStyles } from '@wonder-ui/styles';

const useStyles = createUseStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
    </div>
  )
}
```

## Props

```jsx | inline
import React from 'react';
import DocTable from '../../src/DocTable';
// import code from 'raw-loader!@wonder-ui/core/es/components/Button/Button.js';
import docgen from '../../src/docgen';

docgen('@wonder-ui/core/es/components/Button/Button.js')

// export default () => <DocTable code={code}/>;
```