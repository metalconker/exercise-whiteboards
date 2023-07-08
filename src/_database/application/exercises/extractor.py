file_correct = open('ConstantsCustomExtracted.tsx', 'w+')
# open and reads list of variable names
listvar = open('ExerciseList.txt','r')
# read list of variables
variables = listvar.read()
listvar.close()
# split into array
varArray = variables.split('\n')
# open file2
file2 = open('ConstantsCustom.tsx','r')
# read file2
file2str = file2.read()
#loop thru variables in array
for varName in varArray:
  startindex = file2str.find(varName+":")
  endIndex = file2str.find("},", startindex) + 1
  varstring = file2str[startindex:endIndex]
  file_correct.write("var " + varstring + ';')

file_correct.close()
file2.close()




file_correct = open('ConstantsExrxExtracted.tsx', 'w+')
# open and reads list of variable names
listvar = open('ExerciseList.txt','r')
# read list of variables
variables = listvar.read()
listvar.close()
# split into array
varArray = variables.split('\n')
# open file2
file2 = open('ConstantsExrx.tsx','r')
# read file2
file2str = file2.read()
#loop thru variables in array
for varName in varArray:
  startindex = file2str.find(varName+":")
  endIndex = file2str.find("},", startindex) + 1
  varstring = file2str[startindex:endIndex]
  file_correct.write("var " + varstring + ';')

file_correct.close()
file2.close()