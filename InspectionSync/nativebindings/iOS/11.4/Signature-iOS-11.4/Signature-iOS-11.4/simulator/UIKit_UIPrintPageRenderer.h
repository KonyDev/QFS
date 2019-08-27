#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPrintPageRenderer_symbols(JSContext*);
@protocol UIPrintPageRendererInstanceExports<JSExport>
@property (readonly,nonatomic) NSInteger numberOfPages;
@property (nonatomic) CGFloat footerHeight;
@property (readonly,nonatomic) CGRect paperRect;
@property (copy,nonatomic) NSArray * printFormatters;
@property (nonatomic) CGFloat headerHeight;
@property (readonly,nonatomic) CGRect printableRect;
-(void) drawPrintFormatter: (UIPrintFormatter *) printFormatter forPageAtIndex: (NSInteger) pageIndex ;
-(void) drawFooterForPageAtIndex: (NSInteger) pageIndex inRect: (CGRect) footerRect ;
-(void) addPrintFormatter: (UIPrintFormatter *) formatter startingAtPageAtIndex: (NSInteger) pageIndex ;
-(void) drawHeaderForPageAtIndex: (NSInteger) pageIndex inRect: (CGRect) headerRect ;
-(void) drawPageAtIndex: (NSInteger) pageIndex inRect: (CGRect) printableRect ;
-(NSArray *) printFormattersForPageAtIndex: (NSInteger) pageIndex ;
-(void) drawContentForPageAtIndex: (NSInteger) pageIndex inRect: (CGRect) contentRect ;
-(void) prepareForDrawingPages: (NSRange) range ;
@end
@protocol UIPrintPageRendererClassExports<JSExport>
@end
#pragma clang diagnostic pop