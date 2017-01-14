# PanResponderExample

I have `Board` component which is a `ScrollView` and I have `PanResponder` attached to the `ScrollView`.
`Board` renders `Column` inside which is a `ListView`.
`ListView` row is a simple `TouchableWithoutFeedback` with `onPressIn`.
In `onPressIn` I have timeout after that I decrease number if items displayed in the `Column`.

###Expected behaviour###:

When I start touches and keep moving cursor, even after changing number of items, I should get events about the move from `PanResponder`.

###Actual behaviour###:

When I start touches and keep moving cursor, decreasing number of items, I don't get events from `PanResponder` about the move anymore.
Funny thing is it's not only about the change of datasource, cause when I increase number of items it works.

###Gifs demonstarting the issue###:

Without changing `Column` datasource I get all the events correcly:

![Without](without-changing-data-source.gif)

With decreasing datasource items (it does not matter if it's removing or reassigning different object):

So with this code in `Board.js:46`
```js
this.setState({
  data: []
});
```

![With](with-changing-data-source.gif)

Funny thing is that it works if I change those lines into:

So with this code in `Board.js:46`
```js
this.setState({
  data: [
      { id: 1, index: 0, row: { id: 1, title: 'item1' } },
      { id: 2, index: 1, row: { id: 2, title: 'item2' } },
      { id: 3, index: 2, row: { id: 3, title: 'item3' } },
      { id: 4, index: 3, row: { id: 4, title: 'item4' } }
    ]
});
```
