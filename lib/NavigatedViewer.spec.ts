import Canvas from 'diagram-js/lib/core/Canvas';
import EventBus from 'diagram-js/lib/core/EventBus';

import NavigatedViewer from './NavigatedViewer';

import { testViewer } from './BaseViewer.spec';

const viewer = new NavigatedViewer({
  container: 'container'
});

testViewer(viewer);

const extendedViewer = new NavigatedViewer({
  container: 'container',
  alignToOrigin: false,
  propertiesPanel: {
    attachTo: '#properties-panel'
  }
});

// typed API usage

type FooEvent = {
  /**
   * Very cool field!
   */
  foo: string;
};

type EventMap = {

  foo: FooEvent
};

type TypeMap = {
  canvas: Canvas,
  eventBus: EventBus<EventMap>
};

const typedViewer = new NavigatedViewer<TypeMap>();

const bus = typedViewer.get('eventBus');

const canvas = typedViewer.get('canvas');

canvas.zoom('fit-viewport');

typedViewer.on('foo', event => {
  console.log(event.foo);
});

typedViewer.get('eventBus').on('foo', e => console.log(e.foo));
