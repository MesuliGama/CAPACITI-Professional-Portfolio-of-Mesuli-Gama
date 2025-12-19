import { useState, useEffect } from 'react';

/**
 * A custom hook to determine which section is currently active in the viewport.
 * @param sectionIds An array of element IDs to observe.
 * @param options Optional IntersectionObserver options. The default tracks when a section is centered in the viewport.
 * @returns The ID of the currently active section.
 */
export const useActiveSection = (sectionIds: string[], options?: IntersectionObserverInit): string => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            // This configuration makes the observer trigger when a section is in the vertical middle of the screen.
            // rootMargin: top, right, bottom, left. -50% from top and bottom means the "root" is a horizontal line in the middle.
            options || { rootMargin: '-50% 0px -50% 0px' }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup function to unobserve all elements
        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sectionIds, options]); // Rerun effect if sectionIds or options change

    return activeSection;
};
