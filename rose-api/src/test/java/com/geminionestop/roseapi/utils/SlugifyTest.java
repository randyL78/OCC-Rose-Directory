package com.geminionestop.roseapi.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SlugifyTest {
    @Test
    void slugify_shouldReturnSlugifiedStringUnchanged() {
        String response = Slugify.slugify("test");

        assertEquals("test", response);
    }

    @Test
    void slugify_shouldReturnTextInAllLowerCase() {
        String response = Slugify.slugify("TestUpperCaseConversion");

        assertEquals("testuppercaseconversion", response);
    }

    @Test
    void slugify_shouldReplaceWhitespaceWithHyphen() {
        String response = Slugify.slugify("test white space");

        assertEquals("test-white-space", response);
    }

    @Test
    void slugify_shouldReplaceMultipleWhitespaceWithSingleHyphen() {
        String response = Slugify.slugify("test   white \n  space");

        assertEquals("test-white-space", response);
    }

    @Test
    void slugify_shouldRemoveStartAndTrailingWhitespace() {
        String response = Slugify.slugify("  test white space  ");

        assertEquals("test-white-space", response);
    }
}