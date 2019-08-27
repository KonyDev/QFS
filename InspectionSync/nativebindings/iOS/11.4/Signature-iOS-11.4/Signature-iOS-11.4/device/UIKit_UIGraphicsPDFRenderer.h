#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIGraphicsPDFRenderer_symbols(JSContext*);
@protocol UIGraphicsPDFRendererInstanceExports<JSExport>
JSExportAs(writePDFToURLWithActionsError,
-(BOOL) jswritePDFToURL: (NSURL *) url withActions: (JSValue *) actions error: (JSValue *) error );
JSExportAs(PDFDataWithActions,
-(NSData *) jsPDFDataWithActions: (JSValue *) actions );
JSExportAs(initWithBoundsFormat,
-(id) jsinitWithBounds: (CGRect) bounds format: (UIGraphicsPDFRendererFormat *) format );
@end
@protocol UIGraphicsPDFRendererClassExports<JSExport>
@end
@protocol UIGraphicsPDFRendererFormatInstanceExports<JSExport>
@property (copy,nonatomic) NSDictionary * documentInfo;
@end
@protocol UIGraphicsPDFRendererFormatClassExports<JSExport>
@end
@protocol UIGraphicsPDFRendererContextInstanceExports<JSExport>
@property (readonly,nonatomic) CGRect pdfContextBounds;
-(void) setDestinationWithName: (NSString *) name forRect: (CGRect) rect ;
-(void) beginPage;
-(void) beginPageWithBounds: (CGRect) bounds pageInfo: (NSDictionary *) pageInfo ;
-(void) addDestinationWithName: (NSString *) name atPoint: (CGPoint) point ;
-(void) setURL: (NSURL *) url forRect: (CGRect) rect ;
@end
@protocol UIGraphicsPDFRendererContextClassExports<JSExport>
@end
#pragma clang diagnostic pop