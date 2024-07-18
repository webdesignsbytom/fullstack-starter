# Yaml

What is YAML?

YET ANOTHER MARKUP LANGUAGE
A human readable version of data and a serialization language often used for configuration files.
YAML is a subset of JSON

.yml
.yaml

`---` 3 dashes indicates the start of the file

- No formatting symbols i.e. brackets, braces, quotation marks
- Python style indentation
- Can use key value pairs

```yaml
---
name: Martin D'vloper #key-value
age: 26
hobbies: 
  - painting #first list item
  - playing_music #second list item
  - cooking #third list item
programming_languages:
  java: Intermediate
  python: Advanced
  javascript: Beginner
favorite_food: 
  - vegetables: tomatoes 
  - fruits: 
      citrics: oranges 
      tropical: bananas
      nuts: peanuts
      sweets: raisins
```