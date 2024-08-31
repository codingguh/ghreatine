import PropTypes from 'prop-types';
import { Button } from "@mantine/core";

export default function Hashtag({ categories, keyword, onKeyword }){

  return (
    <div className="px-8">
      {categories.map((category,index) => (
        <Button
          key={index}
          variant='outline'
       
          // variant={` ${category !== keyword?.toLocaleLowerCase() ? 'filled' : '?outline'}`}
          color={`${category !== keyword?.toLocaleLowerCase() ? 'black' : 'blue'}`}
          className={"mr-3 font-bold"}
          onClick={() => onKeyword(category)}
        >
          #
          {category}
        </Button>
      ))}
    </div>
  );
};

Hashtag.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  keyword: PropTypes.string.isRequired,
  onKeyword: PropTypes.func.isRequired,
};