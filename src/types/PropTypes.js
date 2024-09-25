import PropTypes from "prop-types";

// NavLink
export const NavLinkPropTypes = {
    title: PropTypes.string.isRequired,
  };

// FaqItem
export const FaqItemPropTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// Marker
export const MarkerPropTypes = {
  fill: PropTypes.string,
};

// TestimonialItem
export const TestimonialItemPropTypes = {
  item: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  containerClassName: PropTypes.string,
};

// Button
export const ButtonPropTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
  markerFill: PropTypes.string,
};
