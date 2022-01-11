import { useEffect } from "react";
import { createContext, useCallback, useContext, useState } from "react";

interface TagsContextData {
  selectedTag: string;
  handleSelectTag: (tag: string) => void;
  tags: string[];
  registerTag: (tag: string) => void;
}

interface TagsProviderProps {
  children: React.ReactNode;
}

const TagsContext = createContext<TagsContextData>({} as TagsContextData);

export const TagsProvider = ({ children }: TagsProviderProps) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSelectTag = useCallback((tag: string) => {
    setSelectedTag(tag);
  }, []);

  const registerTag = useCallback((tag: string) => {
    setTags((prevTags) => [...prevTags, tag]);
  }, []);

  useEffect(() => {
    setSelectedTag(tags[0]);
  }, [tags]);

  return (
    <TagsContext.Provider
      value={{ tags, handleSelectTag, registerTag, selectedTag }}
    >
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);

  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }

  return context;
};
