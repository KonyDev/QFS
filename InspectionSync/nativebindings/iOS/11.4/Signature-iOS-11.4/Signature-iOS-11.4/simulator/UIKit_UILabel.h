#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UILabel_symbols(JSContext*);
@protocol UILabelInstanceExports<JSExport, NSCodingInstanceExports_, UIContentSizeCategoryAdjustingInstanceExports_>
@property (nonatomic) CGFloat preferredMaxLayoutWidth;
@property (getter=isUserInteractionEnabled,nonatomic) BOOL userInteractionEnabled;
@property (nonatomic,strong) UIColor * textColor;
@property (nonatomic) BOOL adjustsFontSizeToFitWidth;
@property (nonatomic) UIBaselineAdjustment baselineAdjustment;
@property (nonatomic) NSLineBreakMode lineBreakMode;
@property (nonatomic) NSInteger numberOfLines;
@property (copy,nonatomic) NSString * text;
@property (copy,nonatomic) NSAttributedString * attributedText;
@property (getter=isEnabled,nonatomic) BOOL enabled;
@property (nonatomic) CGFloat minimumFontSize;
@property (getter=isHighlighted,nonatomic) BOOL highlighted;
@property (nonatomic) BOOL adjustsLetterSpacingToFitWidth;
@property (nonatomic,strong) UIColor * shadowColor;
@property (nonatomic,strong) UIColor * highlightedTextColor;
@property (nonatomic) BOOL allowsDefaultTighteningForTruncation;
@property (nonatomic) CGFloat minimumScaleFactor;
@property (nonatomic) CGSize shadowOffset;
@property (nonatomic,strong) UIFont * font;
@property (nonatomic) NSTextAlignment textAlignment;
-(CGRect) textRectForBounds: (CGRect) bounds limitedToNumberOfLines: (NSInteger) numberOfLines ;
-(void) drawTextInRect: (CGRect) rect ;
@end
@protocol UILabelClassExports<JSExport, NSCodingClassExports_, UIContentSizeCategoryAdjustingClassExports_>
@end
#pragma clang diagnostic pop