all: openthesaurus_de.js

clean:
	-rm openthesaurus_de.js
	-rm openthesaurus_de.txt
	-rm openthesaurus_de.zip

openthesaurus_de.js: openthesaurus_de.txt Makefile openthesaurus_template.js
	cp $< $@.tmp
#Remove license
	sed -i '/^#/ d' $@.tmp
#Make CSV
	sed -i 's/;/,/g' $@.tmp
#Handle Special characters
#	sed -i -e 's/\Ä/\&Auml;/g' \
#	    -i -e 's/\ä/\&auml;/g' \
#	    -i -e 's/\Ö/\&Ouml;/g' \
#	    -i -e 's/\ö/\&ouml;/g' \
#	    -i -e 's/\Ü/\&Uuml;/g' \
#	    -i -e 's/\ü/\&uuml;/g' \
#	    -i -e 's/\ß/\&szlig;/g' \
##	    -i -e 's/\^-/\&ndash;/g' \
#	    -i -e 's/\^ /\&nbsp;/g' \
#	    -i -e 's/\^</\&lt;/g' \
#	    -i -e 's/\^>/\&gt;/g' \
#	    -i -e 's/\^&/\&amp;/g' \
#	    -i -e 's/\^\^/\&#94;/g' \
#	    -i -e 's/\^x/\&times;/g' \
#	    -i -e 's/\^r/\&rarr;/g' \
#	    -i -e 's/\^b/\&bull;/g' \
#	    -i -e 's/\^e/\&#8644;/g' $@.tmp
	sed -i 's/\"//g' $@.tmp

#Wrap each entry (word) into a own string
	sed -i 's/[ ]*,[ ]*/\"\,\"/g' $@.tmp
	sed -i 's/.*/\"&\"/g' $@.tmp
#Wrap each synset into one large array
#	sed -i 's/.*/\[\["&"\]\], /' $@.tmp
	sed -i 's/.*/\[&\], /' $@.tmp

#Make javascript array
	echo "$$(cat openthesaurus_template.js)" "[" "$$(cat $@.tmp)" "]" > $@

	rm $@.tmp

openthesaurus_de.txt :
	wget -c http://www.openthesaurus.de/export/OpenThesaurus-Textversion.zip -O openthesaurus_de.zip
	unzip -p openthesaurus_de.zip openthesaurus.txt > $@