#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSLayoutManager_symbols(JSContext*);
@protocol NSLayoutManagerNSLayoutManagerDeprecatedCategoryInstanceExports<JSExport>
-(CGGlyph) glyphAtIndex: (NSUInteger) glyphIndex ;
@end
@protocol NSLayoutManagerNSLayoutManagerDeprecatedCategoryClassExports<JSExport>
@end
@protocol NSLayoutManagerInstanceExports<JSExport, NSCodingInstanceExports_>
@property (readonly,nonatomic) CGRect extraLineFragmentUsedRect;
@property (readonly,nonatomic) BOOL hasNonContiguousLayout;
@property (readonly,nonatomic) NSUInteger numberOfGlyphs;
@property (readonly,nonatomic) CGRect extraLineFragmentRect;
@property (readonly,nonatomic) NSTextContainer * extraLineFragmentTextContainer;
@property (nonatomic) CGFloat hyphenationFactor;
@property (nonatomic) BOOL allowsNonContiguousLayout;
@property (nonatomic) BOOL showsInvisibleCharacters;
@property (nonatomic) BOOL usesFontLeading;
@property (nonatomic,weak) id delegate;
@property (nonatomic) BOOL showsControlCharacters;
@property (assign,nonatomic) NSTextStorage * textStorage;
@property (readonly,nonatomic) NSArray * textContainers;
-(void) setAttachmentSize: (CGSize) attachmentSize forGlyphRange: (NSRange) glyphRange ;
-(NSUInteger) firstUnlaidCharacterIndex;
-(void) drawUnderlineForGlyphRange: (NSRange) glyphRange underlineType: (NSUnderlineStyle) underlineVal baselineOffset: (CGFloat) baselineOffset lineFragmentRect: (CGRect) lineRect lineFragmentGlyphRange: (NSRange) lineGlyphRange containerOrigin: (CGPoint) containerOrigin ;
-(void) setExtraLineFragmentRect: (CGRect) fragmentRect usedRect: (CGRect) usedRect textContainer: (NSTextContainer *) container ;
-(id) jsinit;
-(NSUInteger) firstUnlaidGlyphIndex;
-(void) textContainerChangedGeometry: (NSTextContainer *) container ;
-(CGRect) usedRectForTextContainer: (NSTextContainer *) container ;
-(CGFloat) fractionOfDistanceThroughGlyphForPoint: (CGPoint) point inTextContainer: (NSTextContainer *) container ;
-(void) strikethroughGlyphRange: (NSRange) glyphRange strikethroughType: (NSUnderlineStyle) strikethroughVal lineFragmentRect: (CGRect) lineRect lineFragmentGlyphRange: (NSRange) lineGlyphRange containerOrigin: (CGPoint) containerOrigin ;
-(NSRange) glyphRangeForBoundingRectWithoutAdditionalLayout: (CGRect) bounds inTextContainer: (NSTextContainer *) container ;
JSExportAs(enumerateEnclosingRectsForGlyphRangeWithinSelectedGlyphRangeInTextContainerUsingBlock,
-(void) jsenumerateEnclosingRectsForGlyphRange: (NSRange) glyphRange withinSelectedGlyphRange: (NSRange) selectedRange inTextContainer: (NSTextContainer *) textContainer usingBlock: (JSValue *) block );
-(void) underlineGlyphRange: (NSRange) glyphRange underlineType: (NSUnderlineStyle) underlineVal lineFragmentRect: (CGRect) lineRect lineFragmentGlyphRange: (NSRange) lineGlyphRange containerOrigin: (CGPoint) containerOrigin ;
-(void) ensureLayoutForTextContainer: (NSTextContainer *) container ;
-(void) ensureLayoutForBoundingRect: (CGRect) bounds inTextContainer: (NSTextContainer *) container ;
-(void) drawBackgroundForGlyphRange: (NSRange) glyphsToShow atPoint: (CGPoint) origin ;
-(void) drawGlyphsForGlyphRange: (NSRange) glyphsToShow atPoint: (CGPoint) origin ;
-(void) insertTextContainer: (NSTextContainer *) container atIndex: (NSUInteger) index ;
-(void) setLineFragmentRect: (CGRect) fragmentRect forGlyphRange: (NSRange) glyphRange usedRect: (CGRect) usedRect ;
-(NSRange) rangeOfNominallySpacedGlyphsContainingIndex: (NSUInteger) glyphIndex ;
-(CGRect) boundingRectForGlyphRange: (NSRange) glyphRange inTextContainer: (NSTextContainer *) container ;
-(NSUInteger) glyphIndexForPoint: (CGPoint) point inTextContainer: (NSTextContainer *) container ;
-(void) setNotShownAttribute: (BOOL) flag forGlyphAtIndex: (NSUInteger) glyphIndex ;
-(void) setLocation: (CGPoint) location forStartOfGlyphRange: (NSRange) glyphRange ;
-(void) setTextContainer: (NSTextContainer *) container forGlyphRange: (NSRange) glyphRange ;
-(void) ensureLayoutForGlyphRange: (NSRange) glyphRange ;
-(void) ensureLayoutForCharacterRange: (NSRange) charRange ;
-(NSRange) glyphRangeForBoundingRect: (CGRect) bounds inTextContainer: (NSTextContainer *) container ;
-(void) ensureGlyphsForCharacterRange: (NSRange) charRange ;
-(CGPoint) locationForGlyphAtIndex: (NSUInteger) glyphIndex ;
-(NSUInteger) characterIndexForGlyphAtIndex: (NSUInteger) glyphIndex ;
-(void) setDrawsOutsideLineFragment: (BOOL) flag forGlyphAtIndex: (NSUInteger) glyphIndex ;
-(NSUInteger) glyphIndexForCharacterAtIndex: (NSUInteger) charIndex ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) coder );
-(BOOL) notShownAttributeForGlyphAtIndex: (NSUInteger) glyphIndex ;
-(void) drawStrikethroughForGlyphRange: (NSRange) glyphRange strikethroughType: (NSUnderlineStyle) strikethroughVal baselineOffset: (CGFloat) baselineOffset lineFragmentRect: (CGRect) lineRect lineFragmentGlyphRange: (NSRange) lineGlyphRange containerOrigin: (CGPoint) containerOrigin ;
-(void) ensureGlyphsForGlyphRange: (NSRange) glyphRange ;
-(void) removeTextContainerAtIndex: (NSUInteger) index ;
-(CGSize) attachmentSizeForGlyphAtIndex: (NSUInteger) glyphIndex ;
-(void) invalidateDisplayForGlyphRange: (NSRange) glyphRange ;
-(BOOL) drawsOutsideLineFragmentForGlyphAtIndex: (NSUInteger) glyphIndex ;
JSExportAs(enumerateLineFragmentsForGlyphRangeUsingBlock,
-(void) jsenumerateLineFragmentsForGlyphRange: (NSRange) glyphRange usingBlock: (JSValue *) block );
-(CGGlyph) CGGlyphAtIndex: (NSUInteger) glyphIndex ;
-(NSGlyphProperty) propertyForGlyphAtIndex: (NSUInteger) glyphIndex ;
-(void) addTextContainer: (NSTextContainer *) container ;
-(NSRange) glyphRangeForTextContainer: (NSTextContainer *) container ;
-(BOOL) isValidGlyphIndex: (NSUInteger) glyphIndex ;
-(void) invalidateDisplayForCharacterRange: (NSRange) charRange ;
-(void) processEditingForTextStorage: (NSTextStorage *) textStorage edited: (NSTextStorageEditActions) editMask range: (NSRange) newCharRange changeInLength: (NSInteger) delta invalidatedRange: (NSRange) invalidatedCharRange ;
-(NSRange) truncatedGlyphRangeInLineFragmentForGlyphAtIndex: (NSUInteger) glyphIndex ;
@end
@protocol NSLayoutManagerClassExports<JSExport, NSCodingClassExports_>
@end
@protocol NSTextLayoutOrientationProviderInstanceExports_<JSExport>
@property (readonly,nonatomic) NSTextLayoutOrientation layoutOrientation;
@end
@protocol NSTextLayoutOrientationProviderClassExports_<JSExport>
@end
@protocol NSLayoutManagerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) layoutManager: (NSLayoutManager *) layoutManager textContainer: (NSTextContainer *) textContainer didChangeGeometryFromSize: (CGSize) oldSize ;
-(void) layoutManager: (NSLayoutManager *) layoutManager didCompleteLayoutForTextContainer: (NSTextContainer *) textContainer atEnd: (BOOL) layoutFinishedFlag ;
-(NSControlCharacterAction) layoutManager: (NSLayoutManager *) layoutManager shouldUseAction: (NSControlCharacterAction) action forControlCharacterAtIndex: (NSUInteger) charIndex ;
-(BOOL) layoutManager: (NSLayoutManager *) layoutManager shouldBreakLineByHyphenatingBeforeCharacterAtIndex: (NSUInteger) charIndex ;
-(CGFloat) layoutManager: (NSLayoutManager *) layoutManager paragraphSpacingAfterGlyphAtIndex: (NSUInteger) glyphIndex withProposedLineFragmentRect: (CGRect) rect ;
-(CGFloat) layoutManager: (NSLayoutManager *) layoutManager lineSpacingAfterGlyphAtIndex: (NSUInteger) glyphIndex withProposedLineFragmentRect: (CGRect) rect ;
-(CGRect) layoutManager: (NSLayoutManager *) layoutManager boundingBoxForControlGlyphAtIndex: (NSUInteger) glyphIndex forTextContainer: (NSTextContainer *) textContainer proposedLineFragment: (CGRect) proposedRect glyphPosition: (CGPoint) glyphPosition characterIndex: (NSUInteger) charIndex ;
-(BOOL) layoutManager: (NSLayoutManager *) layoutManager shouldBreakLineByWordBeforeCharacterAtIndex: (NSUInteger) charIndex ;
-(CGFloat) layoutManager: (NSLayoutManager *) layoutManager paragraphSpacingBeforeGlyphAtIndex: (NSUInteger) glyphIndex withProposedLineFragmentRect: (CGRect) rect ;
-(void) layoutManagerDidInvalidateLayout: (NSLayoutManager *) sender ;
@end
@protocol NSLayoutManagerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop