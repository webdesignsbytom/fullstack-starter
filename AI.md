# AI

## Key Terms

1. AI Models: These are algorithms that learn from data to make predictions or perform tasks. For example, a model might learn to play a game by analyzing many game scenarios.

2. Ollama: A platform for running and managing machine learning models easily. It focuses on simplifying the process of using AI tools.

3. Kaggle: A platform for data science competitions, datasets, and a community. You can find many datasets to practice with and participate in challenges to improve your skills.

4. Google Colab: A cloud-based environment that allows you to write and execute Python code in your browser, great for machine learning and data analysis. It comes with many libraries pre-installed.

5. Jupyter Notebook: An open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative text. It’s widely used for data analysis and teaching.

## Coding languages

1. Python
2. C#
3. javascript
4. Ruby

## Tools

## Jupyter

Project Jupyter is a project to develop open-source software, open standards, and services for interactive computing across multiple programming languages.

Jupyter create 'IPython' which is a Python REPL

## Jupyter Notebook

`jupter notebook` to start
`pip install --upgrade notebook` update

Jupyter notebook is a open source web for sharing code online for AI projects.
It was part of IPython project until it branched out onto a standard data science tool. Supporting over 40 languages.

### Key Features

1. You can create simplified 'Cells' of code that you can run indivdually.
2. Rich text suppport. Write descriptive text in markdown
3. Vizulizations. Intergates well with libraries like 'Matlibplot', 'Seaborn' and 'plotly' making it easy to create and display charts and graphs in the notebook.
4. Sharing. Notebooks are a .ipynb file type and can be converted to html and pdf.

## Jupyter Labs

`jupter lab` to start
`pip install --upgrade jupyterlab` update

A next generation interface for Project Jupyter and designed for a more powerful and flexible environment.
It using notebooks with a modern UI experience.
Essentially an IDE.

### Key Featuress

1. Multiple document interface. Many notebooks, terminals and files in one display.
2. Flexible layouts. Customize your workspace.
3. Intergrated tools. Built in file manager, terminals and text editor.
4. Extensibility. Modular architecture and extensions.

## Libraries

1. Numpy - Bath math for python
2. Pandas - Provides a data frame like an excel spradsheet in rows and columns
3. Matplotlib - 2D matrix plotting library
4. Scikit-learn - provides common algortythums like decision trees.

## MindStudio

Codeless AI trainer
Pre train you models with out code

`https://app.mindstudio.ai/`

## Algorithms

1. Neural networks

## Labs Commands

the ip is the address of the main machine sharing code.
The port is the port to check for a lab
`jupyter-lab --ip=192.168.1.150 --port=8888` allow another device on the next work to view the lab

.describe() // describe a dataset

## Datasets

`www.kaggle.com` for datasets
Sign in and go to 'dataset's
download the zip file and use inside you project with the path and
`pd.read_csv('path')`

## Process

**Normalization**
Rescaling data so one feature cant dominate the data set.
Can improve convergence speed and better model performance.
Scaling data from 1-100 to 0-1 so all dataset are treated the same without bias of size.
