import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div>
      <div>
        <Button primary rounded outline className="my-5" onClick={handleClick}>
          <GoBell />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger outline>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
