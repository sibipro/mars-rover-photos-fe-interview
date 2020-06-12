import Manifest from './manifest';
import renderer from 'react-test-renderer'

test('manifest component is rendered', () => {
    const component = renderer.create(<Manifest display={true} roverName="Mock Rover" />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})