import { GstPipePipe } from './gst-pipe.pipe';

describe('GstPipePipe', () => {
  it('create an instance', () => {
    const pipe = new GstPipePipe();
    expect(pipe).toBeTruthy();
  });
});
