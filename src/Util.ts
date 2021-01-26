import { CategoryList, SectionAndCategoryResolvable, SectionTypes, ValueOf } from '.';

/**
 * Contains various utility methods.
 */
export class Util {
    /**
     * Resolves a SectionAndCategoryResolvable into a category or section number object.
     * @static
     * @param category - Category or section to resolve.
     * @return Category or section object
     * @throws Will throw an error when it cannot be resolved
     */
    static resolveCategory(category?: SectionAndCategoryResolvable): {section?: ValueOf<typeof SectionTypes>, category?: ValueOf<typeof CategoryList>} {
        if (!category) return {};

        const isSection = Object.keys(SectionTypes).find(s => SectionTypes[s] === category || s === category);
        if (isSection) return { section: SectionTypes[isSection] as ValueOf<typeof SectionTypes> };

        for (const [k, v] of Object.entries(CategoryList)) {
            if (k === category) return { category: v };
            if (v === category) return { category: category };
        }

        throw new TypeError('Unknown category');
    }
}
