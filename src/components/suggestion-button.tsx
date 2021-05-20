import React from "react";

const SuggestionButton = ({children}:{children: string}) => (
    <button type="button" className="bg-blue-300 rounded-3xl px-4 py-1 text-gray-900 border-0 hover:text-blue-400 hover:bg-opacity-0 hover:border-blue-300 hover:border-2">{children}</button>
);

export default SuggestionButton;
