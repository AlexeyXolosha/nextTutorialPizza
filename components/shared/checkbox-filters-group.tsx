'use client';

import React from 'react';
import {FilterChecboxProps, FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui"

type Item = FilterChecboxProps

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                          title,
                                                          items,
                                                          defaultItems,
                                                          limit,
                                                          searchInputPlaceholder,
                                                          className,
                                                          onChange,
                                                          defaultValue
                                                      }) => {
    return (
        <div className={className}>
            <p className="font-bold m-3">{title}</p>

            <div className="mb-5">
                <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>
            </div>

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {items.map((item, index) => (
                    <FilterCheckbox key={index} text={item.text} value={item.value} endAdornment={item.endAdornment}
                                    checked={false} OnCheckedChange={(ids) => console.log(ids)}/>
                ))}
            </div>
        </div>
    )
}