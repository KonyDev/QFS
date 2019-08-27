#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSParagraphStyle_symbols(JSContext*);
@protocol NSTextTabInstanceExports<JSExport, NSCopyingInstanceExports_, NSCodingInstanceExports_, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic) CGFloat location;
@property (readonly,nonatomic) NSTextAlignment alignment;
@property (readonly,nonatomic) NSDictionary * options;
JSExportAs(initWithTextAlignmentLocationOptions,
-(id) jsinitWithTextAlignment: (NSTextAlignment) alignment location: (CGFloat) loc options: (NSDictionary *) options );
@end
@protocol NSTextTabClassExports<JSExport, NSCopyingClassExports_, NSCodingClassExports_, NSSecureCodingClassExports_>
+(NSCharacterSet *) columnTerminatorsForLocale: (NSLocale *) aLocale ;
@end
@protocol NSParagraphStyleInstanceExports<JSExport, NSCopyingInstanceExports_, NSMutableCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic) CGFloat paragraphSpacing;
@property (readonly,nonatomic) CGFloat tailIndent;
@property (readonly,nonatomic) CGFloat defaultTabInterval;
@property (readonly,nonatomic) CGFloat lineSpacing;
@property (readonly,nonatomic) NSLineBreakMode lineBreakMode;
@property (readonly,nonatomic) BOOL allowsDefaultTighteningForTruncation;
@property (readonly,copy,nonatomic) NSArray * tabStops;
@property (readonly,nonatomic) NSWritingDirection baseWritingDirection;
@property (readonly,nonatomic) CGFloat paragraphSpacingBefore;
@property (readonly,nonatomic) float hyphenationFactor;
@property (readonly,nonatomic) CGFloat headIndent;
@property (readonly,nonatomic) CGFloat lineHeightMultiple;
@property (readonly,nonatomic) CGFloat minimumLineHeight;
@property (readonly,nonatomic) CGFloat maximumLineHeight;
@property (readonly,nonatomic) NSTextAlignment alignment;
@property (readonly,nonatomic) CGFloat firstLineHeadIndent;
@end
@protocol NSParagraphStyleClassExports<JSExport, NSCopyingClassExports_, NSMutableCopyingClassExports_, NSSecureCodingClassExports_>
+(NSWritingDirection) defaultWritingDirectionForLanguage: (NSString *) languageName ;
+(NSParagraphStyle *) defaultParagraphStyle;
@end
@protocol NSMutableParagraphStyleInstanceExports<JSExport>
@property (nonatomic) CGFloat paragraphSpacing;
@property (nonatomic) CGFloat tailIndent;
@property (nonatomic) CGFloat defaultTabInterval;
@property (nonatomic) CGFloat lineSpacing;
@property (nonatomic) NSLineBreakMode lineBreakMode;
@property (nonatomic) BOOL allowsDefaultTighteningForTruncation;
@property (copy,nonatomic) NSArray * tabStops;
@property (nonatomic) NSWritingDirection baseWritingDirection;
@property (nonatomic) CGFloat paragraphSpacingBefore;
@property (nonatomic) float hyphenationFactor;
@property (nonatomic) CGFloat headIndent;
@property (nonatomic) CGFloat lineHeightMultiple;
@property (nonatomic) CGFloat minimumLineHeight;
@property (nonatomic) CGFloat maximumLineHeight;
@property (nonatomic) NSTextAlignment alignment;
@property (nonatomic) CGFloat firstLineHeadIndent;
-(void) addTabStop: (NSTextTab *) anObject ;
-(void) removeTabStop: (NSTextTab *) anObject ;
-(void) setParagraphStyle: (NSParagraphStyle *) obj ;
@end
@protocol NSMutableParagraphStyleClassExports<JSExport>
@end
#pragma clang diagnostic pop