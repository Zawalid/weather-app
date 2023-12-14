const errorMessages = {
  locationError: {
    title: 'Our weather app is a bit clueless without your location.',
    description: 'Enable location access and refresh the page to see the weather in your area.',
  },
  internetError: {
    title: "Oops! It looks like you're offline.",
    description: 'Please check your internet connection and give it another go. ',
  },
  noResults: {
    title: 'No Results',
    description: 'Try searching for another city',
  },
  noCities: {
    title: "You don't have any cities in your list.",
    description: 'Add a city to see its weather forecast.',
  },
  noSelectedCity: {
    title: "You haven't selected a city yet",
    description: 'Select a city to see its weather forecast.',
  },
  generalError: {
    title: 'Oops! Something went wrong.',
    description: 'Please try again later.',
  },
  noHistory: {
    title: "Let's discover what's brewing.",
    description: 'Sunny or stormy, we have you covered.',
  },
};

export default function ErrorMessage({ type }) {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center '>
      <h3 className='text-lg font-semibold text-text-primary sm:text-2xl'>
        {errorMessages[type].title}
      </h3>
      <p className='text-xs font-semibold text-text-secondary  sm:text-base'>
        {errorMessages[type].description}
      </p>
    </div>
  );
}
