#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIActivityIndicatorView_symbols(JSContext*);
@protocol UIActivityIndicatorViewInstanceExports<JSExport, NSCodingInstanceExports_>
@property (readwrite,nonatomic,strong) UIColor * color;
@property (getter=isAnimating,readonly,nonatomic) BOOL animating;
@property (nonatomic) UIActivityIndicatorViewStyle activityIndicatorViewStyle;
@property (nonatomic) BOOL hidesWhenStopped;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) coder );
JSExportAs(initWithActivityIndicatorStyle,
-(id) jsinitWithActivityIndicatorStyle: (UIActivityIndicatorViewStyle) style );
-(void) stopAnimating;
-(void) startAnimating;
JSExportAs(initWithFrame,
-(id) jsinitWithFrame: (CGRect) frame );
@end
@protocol UIActivityIndicatorViewClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop