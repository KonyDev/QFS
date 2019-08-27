#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIProgressView_symbols(JSContext*);
@protocol UIProgressViewInstanceExports<JSExport, NSCodingInstanceExports_>
@property (nonatomic,strong) UIColor * trackTintColor;
@property (nonatomic) UIProgressViewStyle progressViewStyle;
@property (nonatomic,strong) NSProgress * observedProgress;
@property (nonatomic,strong) UIImage * progressImage;
@property (nonatomic) float progress;
@property (nonatomic,strong) UIColor * progressTintColor;
@property (nonatomic,strong) UIImage * trackImage;
JSExportAs(initWithProgressViewStyle,
-(id) jsinitWithProgressViewStyle: (UIProgressViewStyle) style );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(void) setProgress: (float) progress animated: (BOOL) animated ;
JSExportAs(initWithFrame,
-(id) jsinitWithFrame: (CGRect) frame );
@end
@protocol UIProgressViewClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop