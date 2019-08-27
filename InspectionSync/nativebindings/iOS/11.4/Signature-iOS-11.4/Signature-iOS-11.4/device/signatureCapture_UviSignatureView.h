#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_signatureCapture_UviSignatureView_symbols(JSContext*);
@protocol UviSignatureViewInstanceExports<JSExport>
@property (nonatomic) CGFloat lineWidth;
@property (nonatomic,strong) NSMutableArray * pathArray;
@property (nonatomic,strong) UIColor * lineColor;
@property (nonatomic,strong) UIColor * backgroundColor;
-(void) drawRect: (CGRect) rect ;
-(UIImage *) signatureImage: (CGPoint) position text: (NSString *) text ;
-(NSString *) captureSignature;
-(UIColor *) changebackgroundColor: (NSString *) Lcolor ;
-(void) erase;
-(BOOL) signatureExists;
-(UIColor *) changeLineColor: (NSString *) Lcolor ;
@end
@protocol UviSignatureViewClassExports<JSExport>
@end
@protocol UviSignatureViewDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) shakeCompleted;
@end
@protocol UviSignatureViewDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop