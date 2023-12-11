import { useEffect, useRef, useState } from 'react';

const useGetHeadings = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('#settings h2'));
    setHeadings(headingElements);
  }, []);

  return { headings };
};

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback);

    const headingElements = Array.from(document.querySelectorAll('#settings h2'));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

export default function NavigationSidebar() {
  const [activeId, setActiveId] = useState('units');
  const { headings } = useGetHeadings();
  useIntersectionObserver(setActiveId);

  useEffect(() => {
    const activeHeading = document.getElementById(activeId);
    document.querySelectorAll('#settings > div').forEach((div) => (div.style.opacity = 0.5));
    activeHeading && (activeHeading.parentElement.style.opacity = 1);

    document.getElementById('active-indicator').style.top = `${
      headings.map((el) => el.id).indexOf(activeId) * 33
    }px`;

    return () => {
      document.querySelectorAll('#settings > div').forEach((div) => (div.style.opacity = 1));
    };
  }, [activeId, headings]);

  return (
    <div className='rounded-xl p-5' id='sidebar'>
      <h2 className='text-lg font-medium text-text-primary'>Quick Access</h2>
      <ul className='relative mt-5 space-y-2 border-l border-border  pl-3'>
        <span
          className='absolute -left-[2px] h-5 w-1 rounded-sm bg-primary transition-[top] duration-500'
          id='active-indicator'
        ></span>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.id === activeId ? 'active' : 'text-text-secondary'}
            onClick={() => heading.scrollIntoView()}
          >
            <button>{heading.textContent}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
