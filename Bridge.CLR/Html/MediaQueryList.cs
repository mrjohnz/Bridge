﻿// Screen WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList

using System;
namespace Bridge.CLR.Html
{
    /// <summary>
    /// A MediaQueryList object maintains a list of media queries on a document, and handles sending notifications to listeners when the media queries on the document change.
    /// This makes it possible to observe a document to detect when its media queries change, instead of polling the values periodically, if you need to programmatically detect changes to the values of media queries on a document.
    /// </summary>
    [Bridge.CLR.Ignore]
    [Bridge.CLR.Name("MediaQueryList")]
    public class MediaQueryList
    {
        private MediaQueryList()
        {
        }

        /// <summary>
        /// Adds a new listener to the media query list. If the specified listener is already in the list, this method has no effect.
        /// </summary>
        /// <param name="listener">The MediaQueryListListener to invoke when the media query's evaluated result changes.</param>
        public void AddListener(Action<MediaQueryList> listener)
        {
        }

        /// <summary>
        /// Removes a listener from the media query list. Does nothing if the specified listener isn't already in the list.
        /// </summary>
        /// <param name="listener">The MediaQueryListListener to stop calling on changes to the media query's evaluated result.</param>
        public void RemoveListener(Action<MediaQueryList> listener)
        {
        }

        /// <summary>
        /// true if the document currently matches the media query list; otherwise false. Read only.
        /// </summary>
        public readonly bool Matches;

        /// <summary>
        /// The serialized media query list.
        /// </summary>
        public readonly string Media;
    }
}