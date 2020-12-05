import React, { useState, useEffect } from 'react';

export default function Tags({ tagsUpdated, key }) {
    const tagChoices = ['7 days', '15 days', '30 days', '30+ days'];
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        setSelectedTags([]);
    }, [key]);

    const tagChange = (e) => {
        const value = e.target.value;
        const alreadySelected = selectedTags.includes(value);
        if (e.target.checked && !alreadySelected) {
            setSelectedTags([...selectedTags, value]);
        } else if (!e.target.checked && alreadySelected) {
            setSelectedTags(
                selectedTags.filter((prevTag) => prevTag !== value)
            );
        }
    };

    useEffect(() => {
        tagsUpdated(selectedTags);
    }, [selectedTags, tagsUpdated]);

    return (
        <>
            {tagChoices.map((choice, index) => (
                <label className="checkbox-inline mr-3" key={index}>
                    
                     <input type="checkbox" className="mr-2 form-checkbox h-5 w-5" onChange={tagChange}/>
                    {' ' + choice}
                </label>
            ))}
        </>
    );
}
