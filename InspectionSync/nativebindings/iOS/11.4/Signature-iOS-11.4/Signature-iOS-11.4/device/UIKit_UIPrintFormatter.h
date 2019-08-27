#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPrintFormatter_symbols(JSContext*);
@protocol UIViewPrintFormatterInstanceExports<JSExport>
@property (readonly,nonatomic) UIView * view;
@end
@protocol UIViewPrintFormatterClassExports<JSExport>
@end
@protocol UISimpleTextPrintFormatterInstanceExports<JSExport>
@property (nonatomic,strong) UIColor * color;
@property (copy,nonatomic) NSString * text;
@property (nonatomic,strong) UIFont * font;
@property (nonatomic) NSTextAlignment textAlignment;
@property (copy,nonatomic) NSAttributedString * attributedText;
JSExportAs(initWithText,
-(id) jsinitWithText: (NSString *) text );
JSExportAs(initWithAttributedText,
-(id) jsinitWithAttributedText: (NSAttributedString *) attributedText );
@end
@protocol UISimpleTextPrintFormatterClassExports<JSExport>
@end
@protocol UIPrintFormatterInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) NSInteger pageCount;
@property (readonly,nonatomic,weak) UIPrintPageRenderer * printPageRenderer;
@property (nonatomic) UIEdgeInsets contentInsets;
@property (nonatomic) UIEdgeInsets perPageContentInsets;
@property (nonatomic) CGFloat maximumContentWidth;
@property (nonatomic) CGFloat maximumContentHeight;
@property (nonatomic) NSInteger startPage;
-(CGRect) rectForPageAtIndex: (NSInteger) pageIndex ;
-(void) drawInRect: (CGRect) rect forPageAtIndex: (NSInteger) pageIndex ;
-(void) removeFromPrintPageRenderer;
@end
@protocol UIPrintFormatterClassExports<JSExport, NSCopyingClassExports_>
@end
@protocol UIMarkupTextPrintFormatterInstanceExports<JSExport>
@property (copy,nonatomic) NSString * markupText;
JSExportAs(initWithMarkupText,
-(id) jsinitWithMarkupText: (NSString *) markupText );
@end
@protocol UIMarkupTextPrintFormatterClassExports<JSExport>
@end
@protocol UIViewUIPrintFormatterCategoryInstanceExports<JSExport>
-(UIViewPrintFormatter *) viewPrintFormatter;
-(void) drawRect: (CGRect) rect forViewPrintFormatter: (UIViewPrintFormatter *) formatter ;
@end
@protocol UIViewUIPrintFormatterCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop