"""
NOTE: Scratchpad blocks are used only for experimentation and testing out code.
The code written here will not be executed as part of the pipeline.
"""
from mage_ai.data_preparation.variable_manager import get_variable


# df = get_variable('floral_pond', 'bitter_river', 'output_0')
import asyncio
import os
print(os.getcwd())
print(os.listdir())

from mage_ai.data_preparation.git import Git

git_manager = Git.get_manager()
print(git_manager.current_branch)

# asyncio.run(git_manager.pull())

git_manager.__pip_install()
